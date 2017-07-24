import React, {Component} from 'react';

class NewImage extends Component {

  render() {
    return (
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={this.props.image} alt="Image"></img>
        </figure>
      </div>
    );
  }
}

export default NewImage;

