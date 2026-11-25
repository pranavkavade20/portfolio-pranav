import React from 'react';
import ErrorState from './ErrorState';

/**
 * Route-level ErrorBoundary catching unexpected render errors with Retry recovery.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="feed-container py-8">
          <ErrorState
            title="Unable to display this page"
            message="An unexpected display issue occurred. Retry loading this view or switch sections from the navigation bar."
            onRetry={this.handleRetry}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
