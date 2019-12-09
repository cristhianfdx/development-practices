import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';

// Queries
import {getAuthorsQuery, getBooksQuery} from '../graphql/queries/queries';

// Mutation
import {AddBooMutation} from '../graphql/mutations/mutations';


class AddBook extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: '' 
        }
    }

    displayAuthors(){
        let data = this.props.getAuthorsQuery;
        
        if(data.loading){
            return (<option disabled>Loading authors...</option>);
        }else{
            return data.authors.map(author =>{
                return (<option key={author.id} value={author.id}>{author.name}</option>);
            });
        }
    }

    submitForm(e){
        this.props.AddBooMutation({
            variables:{
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        });
        
        document.querySelector('#add-book').reset();
        e.preventDefault();    
    }

    render(){
        return (
            <div>
                <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                    <div className="field">
                        <label>Book name:</label>
                        <input type="text" onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Genre:</label>
                        <input type="text" onChange={(e) => this.setState({genre: e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Author:</label>
                        <select onChange={(e) => this.setState({authorId: e.target.value})}>
                            <option>Select author</option>
                            {this.displayAuthors()}
                        </select>
                    </div>
                    <button>+</button>
                </form>
            </div>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(AddBooMutation, {name: "AddBooMutation"})
    )(AddBook);