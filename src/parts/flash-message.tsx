import React, { Component } from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Message = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 2rem);
  margin: 1rem;
  padding: .25rem .5rem;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.flashMessage.background.color};
  color: ${(props) => props.theme.flashMessage.color};
  font-family: ${(props) => props.theme.font.family.sans};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: center;
`;

interface MessageProps {
  children: React.ReactNode;
  className?: string;
  closeComponent?: () => JSX.Element;
  onClose?: () => void;
}

export const FlashMessage = ({ children, className, closeComponent, onClose }: MessageProps) => {
  const close = closeComponent ?
    React.createElement(closeComponent, { onClick: onClose }) :
    null;
  return (<Message className={className}>{children}{close}</Message>);
};

interface MountProps extends MessageProps {
  parent: Element;
}

class FlashMessageMount extends Component<MountProps> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    closeComponent: PropTypes.element,
    onClose: PropTypes.func,
    parent: PropTypes.instanceOf(Element),
  };

  portal = document.createElement('div');

  componentDidMount = () => {
    this.props.parent.appendChild(this.portal);
  }

  componentWillUnmount = () => {
    this.props.parent.removeChild(this.portal);
  }

  handleClose = () => {
    this.componentWillUnmount();
  }

  render() {
    const { children, ...props } = this.props;
    return ReactDOM.createPortal(
      <FlashMessage onClose={this.handleClose} {...props}>{children}</FlashMessage>,
      this.portal,
    );
  }
}

export default FlashMessageMount;
