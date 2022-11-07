import { Component } from "react";
import errPage from "../views/errPage";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <>
         <h1>Something went wrong.</h1>;
         <errPage/>
        </>
       
      }
  
      return this.props.children; 
    }
  }
  export default ErrorBoundary