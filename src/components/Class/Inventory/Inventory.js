import react, { Component } from "react"

import Aux from '../../../hoc/Aux'
import Modal from '../../UI/Modal/Modal'

import Class from '../Class'

import NewClassForm from '../../NewClassForm/NewClassForm'

import data from '../../../classes.json'

class Inventory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newClass: false,
            classes: []
        }
    }

    newClassHandler = () => {
        this.setState({newClass: true});
    }

    closeNewClassHandler = () => {
        this.setState({newClass: false});
    }

    render() {
        const classes = data.map(({subject, number, title, type}) => {
            return  <Class 
                        subject={subject}
                        number={number}
                        title={title}
                        type={type}
                    />
        })

        return (
            <Aux>
                <Modal
                    show={this.state.newClass}
                    modalClosed={this.closeNewClassHandler}
                >
                    <h1>Hello</h1>
                </Modal>
                <button onClick={this.newClassHandler}>Add New Class</button>
                {classes}
            </Aux>
        )
    }
}

export default Inventory