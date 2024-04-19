<div align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/nodejs_alt.svg" width="100" />
</div>

# [Color Verse - Color Pallet Generator Web Application](https://color-verse.vercel.app/)

\_Step into the vibrant realm of Colorverse, your ultimate destination for all things color! Unleash your imagination with our intuitive palette generator, curate personalized selections, and inspire others with your unique creations. Join a community of passionate designers, artists, and visionaries, and let your creativity thrive in a kaleidoscope of hues.

## Credentials

- Email: mr@creator.com
- Password: 12345678

## Technologies

- React Js
- Vite
- Typescript
- Redux Js
- Tailwind
- Yup
- Formik
- Moment
- React Icons
- React Toastify
- JS Cookies

## Features

- Secure login and signup options with encrypted data.
- Random Password generator.
- Generate color pallet by select keys and auto generate colors and reset option.
- Select colors from 8 pallets and make 5 colors at a time.
- Auto generate colors tags.
- Get color code hex, rgb, hsl, hsv, oldHue.
- View all color pallet.
- Search, Filter and Pagination the color pallets.
- Auto suggestion search.
- Copy hex code from color pallets.
- Download color pallet options and copy the pallet url options.
- In single pallet view hex, rgb, hsl, hsv color codes.
- Get color tags and view contributions.
- Comment section and view the all comments for specific pallets.
- Pallet collection options for specific user.
- Not more then collect 12 pallet with not added 2 or more pallets at a time.
- Collection delete options.
- View top contributions, recent users and recent comments.
- View all users with Search and Pagination options.
- Have a user profile there view information.
- View user specific pallet and delete option.
- Edit profile information.
- Great user experience all devices.
- Skeleton loading.
- Responsive gor all devices.
- Exceptions handling.

## Non-Functional Feature

### Security

- User passwords must be securely stored using appropriate hashing and salting techniques.
- API endpoints handling sensitive information should be protected using secure protocols (HTTPS).
- Authentication tokens should be securely generated and validated to prevent unauthorized access.

### Performance

- The API should be able to handle a high volume of concurrent requests efficiently.
- Response times should be optimized to ensure a responsive user experience.

### Scalability

- The application should be designed to accommodate future growth and increasing user demands.
- The architecture should allow for horizontal scalability, such as load balancing and distributed processing.

### Reliability

- The API should be highly available, minimizing downtime and ensuring data integrity.
- Error handling and logging should be implemented to facilitate troubleshooting and maintenance.

### Constraints

- The REST API Application should be implemented using a specific programming language or framework.
- The API may depend on external services or libraries for certain functionalities.

## Folder Structure

```
.
├── .vscode/
│   └── setting.json/
├── dist/
├── node_modules/
├── public/
│   ├── vite.svg/
│   └── brand.jpg/
├── src/
│   ├── assets/
│   │   ├── register/
│   │   ├── brand.ai/
│   │   ├── brand.png/
│   │   └── react.svg/
│   ├── Components/
│   │   ├── Collection/
│   │   ├── Landing/
│   │   ├── Profile/
│   │   ├── Shared/
│   │   └── SinglePallet/
│   ├── Constants/
│   │   └── base-url.ts/
│   ├── Layout/
│   │   └── Root.tsx/
│   ├── Pages/
│   │   ├── Collection/
│   │   ├── Generate/
│   │   ├── Landing/
│   │   ├── Privacy Policy/
│   │   ├── Profile/
│   │   ├── Profiles/
│   │   ├── Register/
│   │   ├── SinglePallet/
│   │   └── UserProfile/
│   ├── Redux/
│   │   ├── Api/
│   │   ├── Feature/
│   │   ├── Slice/
│   │   ├── Types/
│   │   └── store.ts/
│   ├── Routes/
│   │   ├── Protected/
│   │   └── Routes.tsx/
│   ├── Utils/
│   │   ├── generateColorVariations.ts/
│   │   └── generatePassword/
│   ├── Validations/
│   │   ├── Register/
│   ├── app.css
│   └── app.tsx
│   └── index.tsx
│   └── main.tsx
│   └── vite-env.d.ts
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── postcss.config.js
├── package.lock.json
├── package.json
├── tsconfig
├── vercel.json
└── README.md

```

## Installations

1. Clone the git repository

```
git clone https://github.com/mahabubr/colorverse-client
```

2. Install the dependencies

```
npm install
```

### Configuration

1. Create a .env file in the root directory of the project.
2. Add your environment variables to the .env file. Here's an example with placeholders:

```
VITE_BASE_URL=""
```

### Scripts

- `start`: Build and start the application in production mode.
- `dev`: Start the development server with automatic restart using nodemon.
- `build`: Run tests, build TypeScript code, and generate TypeScript aliases.
- `test`: Run tests using Jest.
