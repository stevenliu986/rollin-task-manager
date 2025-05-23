import { Flex } from 'antd';
import splashPageImg from './assets/images/amico.png';
import PrimaryButton from './components/button/PrimaryButton';
import PrimaryTitle from './components/title/PrimaryTitle';

function App() {

  return (
    <Flex
      vertical
      justify='center'
      align='center'
      gap='2.5rem'
      style={{
        height: '100vh',
        padding: '1.5rem',
        textAlign: 'center',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}
    >
      <img
        style={{
          maxWidth: '90%',
          maxHeight: '60vh',
          height: 'auto',
          objectFit: 'contain',
        }}
        src={splashPageImg}
        alt='amico'
      />
      <PrimaryTitle>
        Stay on top of tasks, stress-free
      </PrimaryTitle>
      <PrimaryButton>
        Get started
      </PrimaryButton>
    </Flex>
  );
}

export default App;