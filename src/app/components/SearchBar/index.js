import React from 'react';

import styles from './styles.module.scss';

export default class MyFilteringComponent extends React.Component {
  state = {
    initialItems: [],
    items: []
  };

  filterList = event => {
    let items = this.state.initialItems;
    items = items.filter(item => item.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
    this.setState({ items });
  };

  componentWillMount = () => {
    this.setState({
      initialItems: this.props.content,
      items: this.props.content
    });
  };

  render() {
    return (
      <div className={styles.search}>
        <input className={styles.searchBar} type="search" placeholder="Ingrese el nombre a buscar" />
      </div>
    );
  }
}

/* // <div>
    //   <form>
    //     <input type="text" placeholder="Search" className={styles.searchBar} onChange={this.filterList} />
    //   </form>
    //   <div>
    //     {
    //       this.state.items.map(function (item) {
    //         return <div key={item}>{item}</div>
    //       })
    //     }
    //   </div>
    // </div> */
