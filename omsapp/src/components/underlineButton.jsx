import { Text, StyleSheet, Pressable } from 'react-native'
import React, { Component } from 'react'

export default class UnderlineButton extends Component {
  render() {
    return (
      <Pressable style={styles.button}>
        <Text style={[styles.title, {color: this.props.color}]}>{this.props.label}</Text>
      </Pressable>
    )
  }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
})