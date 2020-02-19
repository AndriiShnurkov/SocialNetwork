import React, { Component } from 'react'
import ModalPost from '../modalPost/modalPost';


class Post extends Component {
    state = {
        isModalOpen: false,
    }

    openModal = () => {
        this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))
    }
    render() {
        const { isModalOpen } = this.state;
        return (
            <div>
                <h2>Post page</h2>
                <button type="button" onClick={this.openModal}>Create new post</button>
                {isModalOpen && <ModalPost />}

            </div>
        );
    }
}

export default Post;
