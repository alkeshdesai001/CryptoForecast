import React from 'react';
import './CoinData.scss';

const CoinData = (props) => (
  <div className='container'>
    <section className='coin-data' id='coin-data-section'>
      <div className='coin-title'>Coins/Bitcoin</div>

      <div className='coin-market'>
        <div className='bitcoin-btc'>
          <div className='btc-logo'>
            <img src={require('../../img/Bitcoin Logo.svg')} alt='BTC-Logo' />
          </div>
          <div className='btc-content'>
            <div className='btc-title'>
              Bitcoin <span className='btc-title-span'>btc</span>
            </div>

            <div className='market-cap'>
              Market Cap:
              <br />
              <spna className='market-cap-span'>$199,881,093,225</spna>
            </div>
            <div className='market-hike'>
              $12,961.07
              <span className='market-hike-span'>^ +5.4%</span>
            </div>
          </div>
        </div>
        <div className='bitcoin-sites'>
          <div className='bitcoin-website'>
            <div className='coin-website'>
              Website <br />
              <span className='coin-site'>bitcoin.org</span>
            </div>
            <div className='coin-map-website'>
              CoinMap Sector <br />
              <span className='coin-map-site'>Digital Cash/Currencies</span>
            </div>
          </div>
          <div className='bitcoin-explorers'>
            <div className='coin-map-website'>
              Explolers <br />
              <span className='coin-map-site'>blockchair.com</span>
              <span className='coin-map-site ml-2'>btc.tokenview.com</span>
              <br />
              <span className='coin-map-site'>bitcoinblockexplorers.com</span>
              <span className='coin-map-site ml-2'>live.blockcypher.com</span>
            </div>
          </div>
          <div className='bitcoin-community mt-1'>
            <p className='bitcoin-community-title'>Community</p>
            <div className='bitcoin-community-link'>
              <a className='social-sites' href='#!'>
                <div className='social-logo'>
                  <i className='fab fa-facebook-f fab-icons'></i>
                </div>
                <p>Facebook</p>
              </a>
              <a className='social-sites' href='#!'>
                <div className='social-logo'>
                  <i className='fab fa-reddit-alien fab-icons'></i>
                </div>
                <p>Reddit</p>
              </a>
              <a className='social-sites' href='#!'>
                <div className='social-logo'>
                  <i className='fab fa-twitter fab-icons'></i>
                </div>
                <p>Tweeter</p>
              </a>
            </div>
          </div>
        </div>
        <div className='bitcoin-market'>
          <div className='market-website'>
            Market Cap <br />
            <span className='market-site'>$199,881,093,225</span>
          </div>
          <div className='market-website'>
            24 Hour Trending Volume <br />
            <span className='market-site'>$24,868,669,617</span>
          </div>
          <div className='market-website'>
            24h Low / 24h High <br />
            <span className='market-site'>$11,120.04 / $11,649.15</span>
          </div>
          <div className='market-website'>
            Circulating Supply <br />
            <span className='market-site'>17,880,100 / 21,000,000</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default CoinData;
