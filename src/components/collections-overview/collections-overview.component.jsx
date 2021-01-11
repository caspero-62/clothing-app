import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import Collection from '../collectionpreview/collection.component';

import './collections-overview.style.scss';

import selectCollections from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({id, ...otherProps}) => 
            (
                <Collection key= {id} {...otherProps}/>
            )
        )}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionsOverview);