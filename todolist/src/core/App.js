import * as React from 'react';

import {SafeAreaView} from 'react-native';
import PasswordInput from '#components/Input/PasswordInput'

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <PasswordInput/>
      </SafeAreaView>
    </>
  );
};

export default App;
