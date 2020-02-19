import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost, deletePost, editPost } from '../../redux/post/postActions';

class ModalPost extends Component {
    state = {
        title: '',
        post: ''
    }

    getText = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }
    onSubmitPost = (e) => {
        e.preventDefault();
        const { title, post } = this.state;
        const newPost = { title, post };
        this.props.addPost(newPost);
        this.setState({
            title: "",
            post: ""
        })
    }

    render() {
        const { title, post } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmitPost}>
                    <h2>Create new message</h2>
                    <input
                        type="text"
                        name="title"
                        onChange={this.getText}
                        value={title} />
                    <br />
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="Your text must be here"
                        name="post"
                        onChange={this.getText}
                        value={post} /><br />
                    <button type="submit">Create post</button>
                </form>
            </div>
        );
    }
}

// export default ModalPost;
// const mapStateToProps = (state, ownProps) => {
//     console.log('ownProps :', ownProps);
//     return {
//         post: state.post
//     }
// }

export default connect(null, { addPost })(ModalPost)