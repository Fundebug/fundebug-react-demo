## [Fundebug](https://www.fundebug.com/)监控[React](https://facebook.github.io/react/)应用错误

### 安装[fundebug-javascript](https://www.npmjs.com/package/fundebug-javascript)

```js
npm install fundebug-javascript
```

### 配置apikey

```js
var fundebug=require("fundebug-javascript");
fundebug.apikey="API-KEY"
```

其中，获取**apikey**需要[免费注册](https://www.fundebug.com/team/create)帐号并且[创建项目](https://www.fundebug.com/project/create)。

### 配置ErrorBoundary

React 16之前的版本，无需额外配置。

对于React 16及其以后的版本，需要在**src/index.js**中进行额外配置：

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // 将component中的报错发送到Fundebug
    fundebug.notifyError(error, {
      metaData: {
        info: info
      }
    });
  }

  render() {
    if (this.state.hasError) {
      return null
      // 也可以在出错的component处展示出错信息
      // return <h1>出错了!</h1>;
    }
    return this.props.children;
  }
}

ReactDOM.render( < ErrorBoundary > < App / > < /ErrorBoundary>, document.getElementById('root'));
```