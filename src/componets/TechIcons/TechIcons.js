import React, { Component ,Fragment } from 'react'
import Express from '../TechStack/Express'
import Html from '../TechStack/Html'
import Css from '../TechStack/Css'
import Jquery from '../TechStack/Jquery'
import Js from '../TechStack/Js'
import Node from '../TechStack/Node'
import Postgresql from '../TechStack/Postgresql'
import ReactIcon from '../TechStack/ReactIcon'
import Knex from '../TechStack/Knex'
import Mocha from '../TechStack/Mocha'

export class TechIcons extends Component {
  render() {
        return (
        <Fragment>
            {(this.props.name=== 'html')? <Html/>:null}
            {(this.props.name=== 'css')? <Css/>:null}
            {(this.props.name=== 'express')? <Express/>:null}
            {(this.props.name=== 'jquery')? <Jquery/>:null}
            {(this.props.name=== 'js')? <Js/>:null}
            {(this.props.name=== 'node')? <Node/>:null}
            {(this.props.name=== 'postgresql')? <Postgresql/>:null}
            {(this.props.name=== 'react')? <ReactIcon/>:null}
            {(this.props.name=== 'knex')? <Knex/>:null}
            {(this.props.name=== 'mocha')? <Mocha/>:null}
        </Fragment>
    )}
}

export default TechIcons
