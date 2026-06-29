import React from 'react';
import Greeting from './Greeting';
import Footer from './Footer';
import ProfileCard from './ProfileCard';
import FruitList from './FruitList';
import ClickCounter from './ClickCounter';
import ColourChanger from './ColourChanger';
import LiveSearch from './LiveSearch';
import Portfolio from './Portfolio';
import TodoList from './TodoList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
      
      {/* Task 1: Main Heading */}
      <h1 style={{ textAlign: 'center', color: '#333' }}>Hello, React!</h1>
      <hr />

      {/* Section 1: Task 2 */}
      <section style={{ margin: '30px 0' }}>
        <h2>Section 1: Getting Started (Task 2)</h2>
        <Greeting />
      </section>
      <hr />

      {/* Section 2: Task 3 & Task 4 */}
      <section style={{ margin: '30px 0' }}>
        <h2>Section 2: Props & Lists</h2>
        
        <h3>Task 3: Profile Cards</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <ProfileCard
            name="Alice Smith"
            age={25}
            hobby="Reading"
            avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
          />
          <ProfileCard
            name="Bob Jones"
            age={30}
            avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
          />
          <ProfileCard
            name="Charlie Brown"
            age={22}
            hobby="Gaming"
            avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
          />
        </div>

        <h3 style={{ marginTop: '20px' }}>Task 4: Fruit List</h3>
        <FruitList />
      </section>
      <hr />

      {/* Section 3: State & Events */}
      <section style={{ margin: '30px 0' }}>
        <h2>Section 3: State & Events</h2>
        
        <h3>Task 5: Click Counter</h3>
        <ClickCounter />

        <h3 style={{ marginTop: '20px' }}>Task 6: Colour Changer</h3>
        <ColourChanger />

        <h3 style={{ marginTop: '20px' }}>Task 7: Live Search Filter</h3>
        <LiveSearch />
      </section>
      <hr />

      {/* Section 4: Personal Portfolio */}
      <section style={{ margin: '30px 0' }}>
        <h2>Section 4: Styling & Personal Portfolio (Task 8)</h2>
        <Portfolio />
      </section>
      <hr />

      {/* Section 5: Mini Project */}
      <section style={{ margin: '30px 0' }}>
        <h2>Section 5: Mini Project - To-Do List App (Task 9)</h2>
        <TodoList />
      </section>
      <hr />

      {/* Footer from Task 2 */}
      <Footer />
    </div>
  );
}

export default App;
