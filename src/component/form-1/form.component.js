import React, {Component} from 'react';

class FirstStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: props.form,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const data = this.state.form;
        data[event.target.id] = event.target.value;
        this.setState({
            form: data
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        // pushing data and updating the step state
        this.props.update(this.state.form, 1);
    }

    render() {
        return (
            <div className={'form'}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <select id='civility' value={this.props.form.civility}
                                onChange={this.handleChange}>
                            <option value={'Mr'}>Mister</option>
                            <option value={'Mrs'}>Mrs</option>
                        </select>
                        {this.state.firstName}
                        <input id='firstName' required={true} type="text" placeholder={'First name'}
                               defaultValue={this.props.form.firstName || ''}
                               value={this.state.firstName}
                               onChange={this.handleChange}/>
                        <input id='lastName' required={true} type="text" placeholder={'Last name'}
                               defaultValue={this.props.form.lastName || ''}
                               value={this.state.lastName}
                               onChange={this.handleChange}/>
                        <input id='email' required={true} type="email" placeholder={'Email'}
                               defaultValue={this.props.form.email}
                               value={this.state.email}
                               onChange={this.handleChange}/>
                        <input id='phone' type="tel" placeholder={'Phone number'} pattern="^(\+33)[0-9]{9}$"
                               defaultValue={this.props.form.phone}
                               value={this.state.phone}
                               onChange={this.handleChange} />
                    </label>
                    <input className={'submit'} type="submit" value="Next step"/>
                </form>
            </div>
        );
    }
}

export default FirstStep;