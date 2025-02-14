```javascript
import React, { useRef, useEffect } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const count = useRef(0);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      console.log('Text ref value:', textRef.current);
    }
  }, [count.current]);

  const incrementCount = () => {
    count.current++;
  };

  return (
    <View>
      <Text ref={textRef}>{count.current}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
};

export default MyComponent;
```