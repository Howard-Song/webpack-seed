/*
 * @Author: yoo
 * @Date: 2020-04-02 10:02:14
 * @LastEditTime: 2020-04-02 14:33:56
 * @LastEditors: yoo
 */
//Greeter,js
import React, {
  Component
} from 'react'
import config from './config.json';
import styles from './Greeter.css';
class Greeter extends Component {
  render() {
    return (
      <div className={styles.root}> {
        config.greetText
      }
      </div>);
  }
}

export default Greeter