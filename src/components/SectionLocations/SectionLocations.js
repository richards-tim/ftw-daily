import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import utahcountyImage from './images/location_utahcounty.jpg';
import saltlakecountyImage from './images/location_saltlakecounty.jpg';
import washingtoncountyImage from './images/location_washingtoncounty.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Utah County',
          utahcountyImage,
          '?address=Utah%20County%2C%20Utah&bounds=40.577913%2C-110.857647%2C39.776246%2C-112.214178&origin=40.577913%2C-110.857647%2C39.776246%2C-112.214178'
        )}
        {locationLink(
          'Salt Lake County',
          saltlakecountyImage,
          '?address=Salt%20Lake%20County%2C%20Utah&bounds=40.921846%2C-111.553188%2C40.414169%2C-112.260216&origin=40.921846%2C-111.553188%2C40.414169%2C-112.260216'
        )}
        {locationLink(
          'Washington County',
          washingtoncountyImage,
          '?address=Washington%20County%2C%20Utah&bounds=37.618289%2C-112.899066%2C36.999975%2C-114.052885&origin=37.618289%2C-112.899066%2C36.999975%2C-114.052885'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
