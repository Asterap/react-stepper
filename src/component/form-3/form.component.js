import React, {Component} from 'react';

class ThirdStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: props.form,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let data = this.state.form;
        data.favoriteFramework = event.target.value;
        this.setState({
            form: data
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        // saving to json-server
        this.props.save();
        this.props.update({}, 3);
    }

    reset() {
        this.props.reset();
    }

    render() {
        return (
            <div className={'final-form'}>
                <div>Are you :</div>
                <div>{this.props.form.civility} {this.props.form.firstName} {this.props.form.lastName}</div>
                <div>Your mail is :</div>
                <div>{this.props.form.email}</div>
                <div>And your phone number is :</div>
                <div>{this.props.form.phone}</div>
                {this.props.form.favoriteFramework[1] &&
                <div>Your addicted to {this.props.form.favoriteFramework}, nice !</div>}
                <form onSubmit={this.handleSubmit}>
                    <input className={'submit'} type="submit" value="Save"/>
                    <button className={'submit'} onClick={() => {
                        this.reset()
                    }}>Cancel
                    </button>
                </form>
            </div>
        );
    }
}

export default ThirdStep;