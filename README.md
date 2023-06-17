# TODO App

For this challenge, we will build a todo app (which is a common way to practice a new technology), using the full stack! From the database to the server, the API client, React and Redux, this app will ask you to use everything you've learned.

## Setup

### 0. Cloning and installation

- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

  You may also want to start a new branch

  ```sh
  cd todo-full-stack
  npm i
  git checkout -b <branchname>
  npm run dev
  ```

  </details>

- [ ] See the designs [here](http://localhost:3000/designs/)

<details>
  <summary>More about using <code>npm</code> vs <code>npx</code></summary>

- When running knex, run `npm run knex <command>`, e.g. `npm run knex migrate:latest` rather than using `npx`
</details>

---

## Requirements

Here's a list of steps in case they are useful. You can build in any order you like though ;)

### 1. Building the database

- [ ] Design a database to store a list of tasks, e.g. task details, priority, completed yes/no
- [ ] Build the migrations and seed data

### 2. Building the API

- [ ] Build an API (back end route) to get the information from your database (list, add, update and delete)
- [ ] Test your API with Insomnia

## Front end

### 3. Setting the stage

- [ ] Build a React component with static html
- [ ] Design Redux global state (think of it like a JS object)
- [ ] Build Redux reducers (the properties or keys of your state design are reducers, the values are hard-code static data as initialState)

## 4. Building the API client

- [ ] Build API client in the front end

### 6. Building thunky actions

- [ ] Build Thunk actions to get task from the API
- [ ] Build Redux actions to save task data from the API (remove hard-code initialState)

---

## Stretch

<details>
  <summary>More about stretch challenges</summary>

- Forms can be tough to build accessibly. First ensure all parts of your form can be reached and used with keyboard-only navigation. Then test your form page with the WAVE browser extension, and fix any accessibility issues it detects

</details>

---

[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=todo-full-stack)

```
todo-full-stack
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ daniel
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           ├─ daniel
│  │           └─ main
│  ├─ objects
│  │  ├─ 09
│  │  │  └─ 5bbb4d15e643e3903137629ad6d13edbd55928
│  │  ├─ 20
│  │  │  └─ e0dd22ba41738a454d39c468c88965158832c2
│  │  ├─ 2c
│  │  │  └─ b95e2af74a9e36ab91140f0ae632a23b24712e
│  │  ├─ 2e
│  │  │  └─ 71db484e9799edb6ce6034ecd94e6661770532
│  │  ├─ 31
│  │  │  ├─ 8de0a131bc15b152cf11c09a93b4ebe97b5469
│  │  │  └─ feb522c13218c21fd8c51ff9e142cd0643e0df
│  │  ├─ 35
│  │  │  ├─ 0bda8a61ef81261a03066d6cd89006af902899
│  │  │  └─ d5e8d692da3788d39c2f43f7963ae95d58eac5
│  │  ├─ 36
│  │  │  └─ d52862af8d2f2cb1a2f8889ebf875066a076ae
│  │  ├─ 3c
│  │  │  └─ 1144b0532782dd08deddab5eeb91589ba65b8a
│  │  ├─ 41
│  │  │  └─ 75fcecb55d6565451fb206f3124b05f0242e38
│  │  ├─ 42
│  │  │  └─ 43a4a3b735c35d8ebffbb0faa51a936d4ded8a
│  │  ├─ 47
│  │  │  └─ 3ce37a2c55b10f80fe29dd342d4d498e50659a
│  │  ├─ 4a
│  │  │  └─ eeddc1f0b1b52cd7c045c02f59f411d279f2bf
│  │  ├─ 4f
│  │  │  ├─ 0a8a79bc0dee594fc3aa03b00bb8942a3ce26e
│  │  │  └─ 3431573815c350a9ae4ddd3063075cdd4e9ed1
│  │  ├─ 54
│  │  │  ├─ 0655a89e3c87b9bea428418d9fbd31bbe9fe43
│  │  │  └─ 1ead33ee957e4f0ff753292d577c8627d903b7
│  │  ├─ 56
│  │  │  └─ 06ed9148785cb74bf7ebf31a69803b212ee02a
│  │  ├─ 5b
│  │  │  └─ f275a0633ff35f9dcbad7fa7fd726e14fbbce5
│  │  ├─ 5e
│  │  │  └─ 8ad61a59c47de2ef6e9d9f7542b7119cbb8519
│  │  ├─ 5f
│  │  │  └─ 0cfa31cafd635b4181e22e55403f2b476644fc
│  │  ├─ 6a
│  │  │  └─ c23b106d14b9c8785eeb476abef26176b617bb
│  │  ├─ 72
│  │  │  └─ b54ecab6a3c14966969105a9f37359a684ea4b
│  │  ├─ 7d
│  │  │  ├─ 65701a3cc444cb228b6a6e9d976416039ff833
│  │  │  └─ 97c2c85426945984aa2756ffd71135423b97de
│  │  ├─ 83
│  │  │  └─ 81b5f4be19e5cb71afc73937e4785a92dd61fa
│  │  ├─ 84
│  │  │  └─ 1203fb24aea339ee0072f68234fb81b2cc58b6
│  │  ├─ 8f
│  │  │  └─ a16ae58d09736bfe04de217720e9c7d4aaa264
│  │  ├─ 90
│  │  │  └─ a5ab88a60fe4a51db9d575246d73fedae9b849
│  │  ├─ 93
│  │  │  └─ 445a76204d75c45ee767efe65456943c3a568d
│  │  ├─ 94
│  │  │  └─ 0490c46998d8f2e0131befddcb84a83280e412
│  │  ├─ 98
│  │  │  └─ 9cc4ef8f424df392bb240416df84d3130facd2
│  │  ├─ ab
│  │  │  └─ 8a734fa6e2b336e4099c65ffb04fa839c44c3c
│  │  ├─ b0
│  │  │  └─ 60df7ce779128f0efafcf15d00d3a7188a8555
│  │  ├─ b3
│  │  │  └─ 0a0b4fe1cae5313488de3d65451d11d2495200
│  │  ├─ b6
│  │  │  └─ c9b101d0b285dc0915e7c1232db5c04eee4a5c
│  │  ├─ b7
│  │  │  └─ a7c32eb8be90266ea814f331d8e23ed3c767d8
│  │  ├─ b9
│  │  │  └─ 7462d25392162849c75f6924e78214f3dc08c5
│  │  ├─ ba
│  │  │  └─ b69027ecbc44d08dd029729c2e20a97c3196d2
│  │  ├─ be
│  │  │  └─ 1303520e950ecc505bde4bffd8e79004755a46
│  │  ├─ c0
│  │  │  └─ 3cc6172ab9e70f2840bb326cb6f6548bbe250b
│  │  ├─ c1
│  │  │  └─ b81d193e1fd86965cd2944d9ec4f4b4315c11b
│  │  ├─ c5
│  │  │  └─ f9c382a482fc7da7a1f66daf8eed972aa67320
│  │  ├─ c8
│  │  │  └─ cb9189771288c0e9d294a524b65dba3f48369b
│  │  ├─ d1
│  │  │  └─ 2bbf6931637907f1a524f274669776afa310e0
│  │  ├─ d3
│  │  │  ├─ 0c4346a02a70996e7b30b72314ebfc43de77d7
│  │  │  └─ 82760f54c78421f70c2a2864d8fcac8c77a31f
│  │  ├─ d6
│  │  │  └─ 1ce5712506ddddca3d8ab135966489e2eb5a84
│  │  ├─ da
│  │  │  └─ 9379c2ae4bf4b4c66b1a2d9dd35810cae26fc1
│  │  ├─ db
│  │  │  └─ 9a3133f6b036954485249075ba9806c692840e
│  │  ├─ dd
│  │  │  └─ 8f8e9dfa4ccd0380270c9947ce6ea305edda96
│  │  ├─ df
│  │  │  ├─ 2ce44951ad7ed728e63ac2625ae27a10f83f4b
│  │  │  └─ 49aaf7103117292bba948bf56d89d6b437bf8a
│  │  ├─ ea
│  │  │  └─ 32e2b9cd834713dd8928ebb3811df4231ab852
│  │  ├─ eb
│  │  │  └─ 15abfc538ad7d9a5a27490ef3459f7fb0d3a41
│  │  ├─ ec
│  │  │  └─ 359c09755dc76fe56f77d4656b0d7820db1f12
│  │  ├─ ed
│  │  │  └─ 1396f89866775fc76ef710a8773c6eaf873d11
│  │  ├─ f0
│  │  │  └─ 2d35ad720e84097465cdff127cc4b1f9136956
│  │  ├─ f2
│  │  │  └─ f603cc0cdd86ad10a33d77c4a7d55dcfaef4ed
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-ecf55704371b8da6fb2c9d5e78a17ab2bcda1d3e.idx
│  │     └─ pack-ecf55704371b8da6fb2c9d5e78a17ab2bcda1d3e.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ daniel
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     ├─ daniel
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ README.md
├─ client
│  ├─ apis
│  │  ├─ .gitkeep
│  │  └─ index.ts
│  ├─ components
│  │  ├─ AddTodo.tsx
│  │  ├─ App.tsx
│  │  └─ List.tsx
│  ├─ hooks.ts
│  ├─ index.tsx
│  ├─ slices
│  │  ├─ index.ts
│  │  └─ todos.ts
│  ├─ store.ts
│  └─ styles
│     └─ index.scss
├─ index.html
├─ models
│  └─ Todo.ts
├─ package-lock.json
├─ package.json
├─ public
│  └─ designs
│     ├─ index.css
│     └─ index.html
├─ server
│  ├─ db
│  │  ├─ connection.js
│  │  ├─ index.ts
│  │  ├─ knexfile.js
│  │  ├─ migrations
│  │  │  └─ 20230613232002_todos.js
│  │  └─ seeds
│  │     └─ create_todos_seed.js
│  ├─ index.ts
│  ├─ routes
│  │  ├─ .gitkeep
│  │  └─ todos.ts
│  ├─ server.ts
│  └─ tsconfig.json
├─ tsconfig.json
└─ vite.config.js

```