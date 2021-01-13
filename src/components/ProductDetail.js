import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        let { match } = this.props;
        return (
            <div>
                Product detail of {match.params.a}
            </div>
        );
    }
}


export default ProductDetail;