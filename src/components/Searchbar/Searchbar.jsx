import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';
import { BsFillCameraFill } from 'react-icons/bs';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.query.trim()) {
      return toast.warning('please type something');
    }
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <BsFillCameraFill size={20} />
            <ButtonLabel>Search</ButtonLabel>
          </Button>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;