import React, {Component} from 'react';
import ItineraryTime from "./ItineraryTime.jsx";
import ItineraryCard from "./ItineraryCard.jsx";
import FavoriteBar from "./FavoriteBar.jsx";
import SortableComponent from "../dnd/SortableComponent.jsx";
import Api from '../../library/api.js';

class ItineraryIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favCards: []
      // itCards: []
    }
  }

  componentWillMount() {
    Api.get('/itinerary/favorites')
      .then((cards) => this.setState({
        favCards: cards
      })
    );
  }

componentDidMount() {
    fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      credentials: 'include',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '//this.props.routes.currentUser.token,
      },
      body: JSON.stringify({
        "start": {
          "dateTime": "2017-09-08T22:47:31-07:00"
        },
        "end": {
          "dateTime": "2017-09-08T23:47:31-07:00"
        }
      })
    })
  }

  render() {
    return (
      <div className="itinerary">
        <div className="header">
          <FavoriteBar favCards={this.state.favCards}/>
        </div>
        <div className="columns">
          <div className="column is-4">
            <ItineraryTime />
          </div>
          <div className="column <is-6></is-6>">
            <SortableComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default ItineraryIndex;