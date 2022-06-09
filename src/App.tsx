import { Header } from './Components/Header';
import { Post } from './Components/Post';
import { Sidebar } from './Components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/bfbrug.png',
      name: 'Bruno Fernandes',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um proejto no meu portifa.'},
      {type: 'link', content: 'bfbrug.com'},
    ],
    publishedAt: new Date('2022-06-03 13:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um proejto no meu portifa.'},
      {type: 'link', content: 'bfbrug.com'},
    ],
    publishedAt: new Date('2022-06-01 13:00:00'),
  },
]


function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (

              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App

