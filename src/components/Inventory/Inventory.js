import react, { Component } from "react"

class Inventory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: []
        }
    }

    render() {
        return (
            <div>
                <button>Add New Class</button>
            </div>
        )
    }
}

export default Inventory