// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./ChainlinkModel.sol";
import "./status/Heartbeat.sol";

contract ChainlinkHeartbeatModel is Heartbeat, ChainlinkModel {
    /**
     * @dev Get asset price status.
     * @param _asset Asset address.
     * @return Asset price status, ture: available; false: unavailable.
     */
    function getAssetStatus(address _asset)
        external
        virtual
        override
        returns (bool)
    {
        IChainlinkAggregator _aggregator = IChainlinkAggregator(
            aggregator_[_asset]
        );
        if (_aggregator == IChainlinkAggregator(0)) return false;
        (, , , uint256 _updatedAt, ) = _aggregator.latestRoundData();

        uint256 _assetValidInterval = heartbeat_[_asset];
        if (_assetValidInterval == 0)
            _assetValidInterval = defaultHeartbeat_;

        return block.timestamp < _updatedAt.add(_assetValidInterval);
    }

    /**
     * @dev The price and status of the asset.
     * @param _asset Asset address.
     * @return Asset price and status.
     */
    function getAssetPriceStatus(address _asset)
        external
        virtual
        override
        returns (uint256, bool)
    {
        IChainlinkAggregator _aggregator = IChainlinkAggregator(
            aggregator_[_asset]
        );
        if (_aggregator == IChainlinkAggregator(0)) return (0, false);

        (, int256 _answer, , uint256 _updatedAt, ) = _aggregator
        .latestRoundData();

        if (_answer < 0) return (0, false);

        uint256 _assetValidInterval = heartbeat_[_asset];
        if (_assetValidInterval == 0)
            _assetValidInterval = defaultHeartbeat_;

        return (
            _correctPrice(
                uint256(IERC20(_asset).decimals()),
                uint256(_aggregator.decimals()),
                uint256(_answer)
            ),
            block.timestamp < _updatedAt.add(_assetValidInterval)
        );
    }
}
