import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can later send this to Sentry / LogRocket
    console.error("UI Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl font-bold mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-600 max-w-md mb-6">
            An unexpected error occurred while loading this page.
            Please try refreshing or go back home.
          </p>

          <Link
            to="/"
            className="px-6 py-3 border border-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            Go Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
