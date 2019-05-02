class Observer extends Component {
    constructor() {
      super();
      this.state = { isVisible: false };
      this.io = null;
      this.container = null;
    }
    componentDidMount() {
      this.io = new IntersectionObserver( entry  => {
        this.setState({ isVisible: entry[0].isIntersecting });
      }, {});
      this.io.observe(this.container);
    }
    componentWillUnmount() {
      if (this.io) {
        this.io.disconnect();
      }
    }
    render() {
      return (
        // 这里也可以使用 findDOMNode 实现，但是不建议
        <div
          ref={div => {
            this.container = div;
          }}
        >
          {Array.isArray(this.props.children)
            ? this.props.children.map(child => child(this.state.isVisible))
            : this.props.children(this.state.isVisible)}
        </div>
      );
    }
  }