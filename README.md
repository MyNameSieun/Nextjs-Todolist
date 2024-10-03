`NEXT TODOLIST`

## 1. props-driiling

> 설치한 라이브러리: x

## 2. json-server

> 설치한 라이브러리: `axios`, `json-server`

## 3. Zustand----->

> 설치한 라이브러리: `zustand`

- 전역 상태 관리로만 사용(서버 통신x),
- todo 디테일 페이지 적용

```
📂 app:
│   📄 .eslintrc.json
│   📄 .gitignore
│   📄 next.config.mjs
│   📄 package.json
│   📄 postcss.config.mjs
│   📄 tailwind.config.ts
│   📄 tsconfig.json
│   📄 yarn.lock
│
└───📂 app
    📄 favicon.ico
    📄 layout.tsx
    📄 page.tsx
    │
    ├───📂 assets
    │       📄 sample-todo.ts
    │
    ├───📂 components
    │   └───📂 todo
    │           📄 TodoForm.tsx
    │           📄 TodoItem.tsx
    │           📄 TodoList.tsx
    │
    ├───📂 details
    │   └───📂 [todoId]
    │           📄 page.tsx
    │
    ├───📂 store
    │       📄 todo-store.ts
    │
    └───📂 types
            📄 todo-types.ts
```

## 4. react-query----->

> 설치한 라이브러리: `@tanstack/react-query`, `axios`, `next-auth`, `zustand`, `daisyui`

```
📂 app:
│   📄 favicon.ico
│   🎨 globals.css
│   📄 layout.tsx
│   📄 page.tsx
│   📄 providers.tsx
│
├───📂 (🔓 auth)
│   └───📂 todo
│       📄 layout.tsx
│       ├───📂 my
│       │       📄 page.tsx
│       └───📂 new
│               📄 page.tsx
│
├───📂 (🔒 nonAuth)
│   ├───📂 home
│   │       📄 page.tsx
│   ├───📂 signin
│   │       📄 page.tsx
│   └───📂 signup
│           📄 page.tsx
│
├───📂 api
│   └───📂 auth
│       └───📂 [...nextauth]
│               📄 route.ts
│
├───📂 components
│   ├───📂 common
│   │       📄 SignInOutButton.tsx
│   ├───📂 layouts
│   │       📄 Header.tsx
│   └───📂 todo
│           📄 TodoForm.tsx
│           📄 TodoItem.tsx
│           📄 TodoList.tsx
│
├───📂 detail
│   └───📂 [todoId]
│           📄 page.tsx
│
├───📂 fonts
│       🎶 GeistMonoVF.woff
│       🎶 GeistVF.woff
│
├───📂 hooks
│   └───📂 query
│           📄 keys.constant.ts
│           📄 useSingleTodoQuery.ts
│           📄 useTodosMutation.ts
│           📄 useTodosQuery.ts
│
├───📂 services
│       📄 todos.ts
│
├───📂 store
│       📄 counterStore.ts
│
└───📂 types
        📄 todo-types.ts
```
