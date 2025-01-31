
import './App.css';
import { Destinos } from './components/Destinos';
import { ComponenteHeader } from './components/ComponenteHeader';
import { ComponenteFooter } from './components/ComponenteFooter';
import { BackgroundChanger } from './components/BackgroundChanger';
import { ComponenteContenido } from './components/ComponenteContenido';

function App() {
  return (
    
    <div className="App">
      <div className='contenedor-principal'>
      <BackgroundChanger/>
      <ComponenteHeader />
      <ComponenteContenido />

        <Destinos
          imagendestino='destino1'
          nombredestino='Uvita'
          descripciondestino='La Isla Quiribrí, más conocida por su nombre popular, Isla Uvita, es una isla de Costa Rica, ubicada a 1.4 km al este del actual puerto de la ciudad de Limón, en el mar Caribe. Es Monumento Nacional de Costa Rica desde 1984, ya que reviste importancia histórica por ser el primer punto del territorio costarricense donde tomó tierra Cristóbal Colón en su cuarto viaje a América, el 25 de septiembre de 1502.'
          url='https://nodejs.org/en'
        />
        <Destinos                                       
          imagendestino='destino1'
          nombredestino='Uvita'
          descripciondestino='La Isla Quiribrí, más conocida por su nombre popular, Isla Uvita, es una isla de Costa Rica, ubicada a 1.4 km al este del actual puerto de la ciudad de Limón, en el mar Caribe. Es Monumento Nacional de Costa Rica desde 1984, ya que reviste importancia histórica por ser el primer punto del territorio costarricense donde tomó tierra Cristóbal Colón en su cuarto viaje a América, el 25 de septiembre de 1502.'
          url='https://nodejs.org/en'
        />
        <Destinos
          imagendestino='destino1'
          nombredestino='Uvita'
          descripciondestino='La Isla Quiribrí, más conocida por su nombre popular, Isla Uvita, es una isla de Costa Rica, ubicada a 1.4 km al este del actual puerto de la ciudad de Limón, en el mar Caribe. Es Monumento Nacional de Costa Rica desde 1984, ya que reviste importancia histórica por ser el primer punto del territorio costarricense donde tomó tierra Cristóbal Colón en su cuarto viaje a América, el 25 de septiembre de 1502.'
          url='https://nodejs.org/en'
        />
        <Destinos
          imagendestino='destino1'
          nombredestino='Uvita'
          descripciondestino='La Isla Quiribrí, más conocida por su nombre popular, Isla Uvita, es una isla de Costa Rica, ubicada a 1.4 km al este del actual puerto de la ciudad de Limón, en el mar Caribe. Es Monumento Nacional de Costa Rica desde 1984, ya que reviste importancia histórica por ser el primer punto del territorio costarricense donde tomó tierra Cristóbal Colón en su cuarto viaje a América, el 25 de septiembre de 1502.'
          url='https://nodejs.org/en'
        />
        <ComponenteFooter />
      </div>
    </div>
  );
}

export default App;
