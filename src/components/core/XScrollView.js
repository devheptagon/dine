/* eslint-disable react/no-string-refs */
import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

class XScrollView extends React.Component {
  render() {
    const {children, style, ...rest} = this.props;
    return (
      //parent view is necessary, otherwise scrollview overrides flex
      <View style={styles.wrapper}>
        <ScrollView
          ref="_scrollView"
          contentInsetAdjustmentBehavior="automatic"
          nestedScrollEnabled={true}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => {
            this.refs._scrollView.scrollTo({x: 0, y: 0, animated: true});
          }}
          contentContainerStyle={[styles.content, style]}
          {...rest}>
          {children}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});

export default XScrollView;
