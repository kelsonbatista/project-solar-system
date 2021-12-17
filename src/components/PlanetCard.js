import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className={ `planet-card ${planetName}Div` } data-testid="planet-card">
        <div className="planet">
          <img
            className={ planetName }
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
        </div>
        <div data-testid="planet-name">{planetName}</div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
