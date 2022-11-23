import PropTypes from 'prop-types';
import '../styles/global.css';

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <Component {...pageProps} />
  );
}

App.defaultProps = {
  pageProps: {},
};

App.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  pageProps: PropTypes.object,
};
