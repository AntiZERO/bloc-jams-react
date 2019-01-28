import React, { Component } from 'react';

class PlayerBar extends Component {
   render() {
      return(
         <section className="player-bar">
            <section id="buttons">
                <button id="previous" className='btnPrev' onClick={this.props.handlePrevClick}>
                    <span className="icon ion-md-skip-backward"></span>
                </button>
                <button id="play-pause" className='btnPlay' onClick={this.props.handleSongClick}>
                    <span className={this.props.isPlaying ? 'icon ion-md-pause' : 'icon ion-md-play'}></span>
                </button>
                <button id="next" className='btnNext' onClick={this.props.handleNextClick}>
                    <span className="icon ion-md-skip-forward"></span>
                </button>
            </section>

    
            <section id="time-control">
                <div className="current-Time"> Current Time: {this.props.formatTime(this.props.currentTime)}</div>
                <input
                    type="range"
                    className="seek-bar"
                    value={(this.props.currentTime / this.props.duration) || 0}
                    max="1"
                    min="0"
                    step="0.01"
                    onChange={this.props.handleTimeChange}
                />
                <div className="total-time">Total Time: {this.props.formatTime(this.props.duration)}</div>
            </section>
            <section id="volume-control">
                <div className="current-Volume">Volume: {this.props.volume}</div>
                <input 
                    type="range" 
                    className="seek-bar" 
                    value={this.props.volume}
                    max="1"
                    min="0"
                    step="0.1"
                    onChange={(this.props.handleVolumeChange)}
                />
            </section>
         </section>
         );
  }
}

export default PlayerBar;