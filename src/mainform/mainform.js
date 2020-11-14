import React, {Component} from 'react';
import TechSpec from '../techspec/techspec';

export default class Mainform extends Component {

       
    render() {
                                      //{FEATURES DATA}         {MAP DEF featureItem wasprobably a better name}
        const features = Object.keys(this.props.features).map((feature, idx) => {
              
            return (
                <TechSpec features = {this.props.features} feature = {feature} data = {this.props.data} changeFeature = {this.props.changeFeature} item = {this.props.item}/>
            );
          });

        return(
            
            <form className="main__form">
              <h2>Customize your laptop</h2>
              {features}
            </form>
         );
    }
}