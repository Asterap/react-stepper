import React, {Component} from 'react';

class SecondStep extends Component {
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
        // pushing data and updating the step state
        this.props.update(this.state.form, 2);
    }

    static isItKnown(framework) {
        if (framework === "Vue" || framework === "Angular" || framework === "Symfony") {
            return ''
        } else {
            return framework;
        }
    }

    render() {
        return (
            <div className={'form-2'}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        What is your favorite Framework ?
                        <div className={'check-input'}>
                            Vue
                            <input checked={this.props.form.favoriteFramework === "Vue"} onChange={this.handleChange}
                                   type="radio" name="gender" value="Vue"/>
                        </div>
                        <div className={'check-input'}>
                            Angular
                            <input checked={this.props.form.favoriteFramework === "Angular"}
                                   onChange={this.handleChange}
                                   type="radio" name="gender" value="Angular"/>
                        </div>
                        <div className={'check-input'}>
                            Symfony
                            <input checked={this.props.form.favoriteFramework === "Symfony"}
                                   onChange={this.handleChange}
                                   type="radio" name="gender" value="Symfony"/>
                        </div>
                        <textarea onChange={this.handleChange} placeholder={'Still using Backbone ? Let us know !'}
                                  defaultValue={SecondStep.isItKnown(this.props.form.favoriteFramework)}>

                        </textarea>
                    </label>
                    <input className={'submit'} type="submit" value="Next step"/>
                </form>
            </div>
        );
    }
}

export default SecondStep;