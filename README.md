# 👋Hello, Welcome to My Real Estate Mobile App

<div align="center">

<!-- Replace with your own logo or remove this line -->
<!-- ![Expo Logo](./assets/images/expo-logo.png) -->

**Build amazing universal apps with React Native**

[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)

</div>

---

## 🚀 Quick Start

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app), designed to help you build universal apps that run on iOS, Android, and the web.

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (optional but recommended)

### Installation & Setup

1. **Install dependencies**

   <div style="background: #1e1e1e; border-radius: 12px; padding: 16px; margin: 16px 0; position: relative; font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;">
     <div style="display: flex; align-items: center; margin-bottom: 12px;">
       <div style="width: 12px; height: 12px; border-radius: 50%; background: #ff5f57; margin-right: 8px;"></div>
       <div style="width: 12px; height: 12px; border-radius: 50%; background: #ffbd2e; margin-right: 8px;"></div>
       <div style="width: 12px; height: 12px; border-radius: 50%; background: #28ca42;"></div>
     </div>
     <code style="color: #50fa7b; font-size: 14px;">npm install</code>
   </div>

2. **Start the development server**

   <div style="background: #1e1e1e; border-radius: 12px; padding: 16px; margin: 16px 0; position: relative; font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;">
     <div style="display: flex; align-items: center; margin-bottom: 12px;">
       <div style="width: 12px; height: 12px; border-radius: 50%; background: #ff5f57; margin-right: 8px;"></div>
       <div style="width: 12px; height: 12px; border-radius: 50%; background: #ffbd2e; margin-right: 8px;"></div>
       <div style="width: 12px; height: 12px; border-radius: 50%; background: #28ca42;"></div>
     </div>
     <code style="color: #50fa7b; font-size: 14px;">npx expo start</code>
   </div>

3. **Choose your development environment:**

   | Platform                 | Command                             | Description               |
   | ------------------------ | ----------------------------------- | ------------------------- |
   | 🔧 **Development Build** | `expo run:ios` / `expo run:android` | Full native runtime       |
   | 🤖 **Android Emulator**  | Press `a` in terminal               | Android Studio emulator   |
   | 📱 **iOS Simulator**     | Press `i` in terminal               | Xcode simulator           |
   | 🎯 **Expo Go**           | Scan QR code                        | Quick prototyping sandbox |

---

## 📱 Development Options

<table>
<tr>
<td align="center">
🔧<br/>
<b>Development Build</b><br/>
Full native runtime with custom native code support
</td>
<td align="center">
🤖<br/>
<b>Android Emulator</b><br/>
Test on Android virtual devices
</td>
<td align="center">
📱<br/>
<b>iOS Simulator</b><br/>
Test on iOS virtual devices
</td>
<td align="center">
🎯<br/>
<b>Expo Go</b><br/>
Quick testing with limited native features
</td>
</tr>
</table>

---

## 📂 Project Structure

```
📦 your-expo-app
├── 📁 app/                    # Main application directory (file-based routing)
│   ├── 📄 index.tsx          # Home screen
│   ├── 📄 _layout.tsx        # Root layout
│   └── 📁 (tabs)/            # Tab navigation
├── 📁 components/             # Reusable UI components
├── 📁 constants/              # App constants and configuration
├── 📁 hooks/                  # Custom React hooks
├── 📁 assets/                 # Images, fonts, and other static assets
├── 📄 app.json               # Expo configuration
├── 📄 package.json           # Dependencies and scripts
└── 📄 tsconfig.json          # TypeScript configuration
```

### 🛣️ File-Based Routing

Start developing by editing files in the **`app`** directory. This project uses Expo Router's intuitive file-based routing system:

- `app/index.tsx` → `/` (home screen)
- `app/about.tsx` → `/about`
- `app/profile/index.tsx` → `/profile`
- `app/(tabs)/` → Tab navigation group

> **💡 Pro Tip**: Use parentheses `()` for route groups and square brackets `[]` for dynamic routes.

---

## ✨ Get a Fresh Start

When you're ready to start building your own app:

<div style="background: #1e1e1e; border-radius: 12px; padding: 16px; margin: 16px 0; position: relative; font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;">
  <div style="display: flex; align-items: center; margin-bottom: 12px;">
    <div style="width: 12px; height: 12px; border-radius: 50%; background: #ff5f57; margin-right: 8px;"></div>
    <div style="width: 12px; height: 12px; border-radius: 50%; background: #ffbd2e; margin-right: 8px;"></div>
    <div style="width: 12px; height: 12px; border-radius: 50%; background: #28ca42;"></div>
  </div>
  <code style="color: #50fa7b; font-size: 14px;">npm run reset-project</code>
</div>

This command will:

- 📦 Move the starter code to the **`app-example`** directory
- 🆕 Create a blank **`app`** directory for your project
- 🧹 Clean up example files and configurations

---

## 🎨 Customization

### Theme & Styling

- Modify `constants/Colors.ts` for your color palette
- Update `app/_layout.tsx` for global app configuration
- Customize components in the `components/` directory

### App Configuration

Edit `app.json` to configure:

- App name and description
- Icons and splash screens
- Platform-specific settings
- Build configurations

---

## 🛠️ Available Scripts

| Script         | Command                 | Description                    |
| -------------- | ----------------------- | ------------------------------ |
| **Start**      | `npm start`             | Start the development server   |
| **Android**    | `npm run android`       | Run on Android device/emulator |
| **iOS**        | `npm run ios`           | Run on iOS device/simulator    |
| **Web**        | `npm run web`           | Run in web browser             |
| **Reset**      | `npm run reset-project` | Reset to blank project         |
| **Lint**       | `npm run lint`          | Run ESLint                     |
| **Type Check** | `npm run type-check`    | Run TypeScript compiler        |

---

## 📚 Learning Resources

<div align="center">

### 📖 Documentation

[![Expo Docs](https://img.shields.io/badge/📚_Expo_Docs-000020?style=for-the-badge&logo=expo)](https://docs.expo.dev/)
[![Guides](https://img.shields.io/badge/📖_Guides-4285F4?style=for-the-badge)](https://docs.expo.dev/guides)

### 🎓 Tutorials

[![Learn Expo](https://img.shields.io/badge/🎓_Learn_Expo-FF6B6B?style=for-the-badge)](https://docs.expo.dev/tutorial/introduction/)
[![React Native](https://img.shields.io/badge/React_Native_Docs-61DAFB?style=for-the-badge&logo=react)](https://reactnative.dev/docs/getting-started)

</div>

**Key Topics to Explore:**

- 🎯 [Expo Router](https://docs.expo.dev/router/introduction/) - Navigation and routing
- 📱 [Native APIs](https://docs.expo.dev/versions/latest/) - Camera, location, notifications
- 🎨 [UI Components](https://docs.expo.dev/ui-programming/react-native-styling-buttons/) - Styling and theming
- 🚀 [Building for Production](https://docs.expo.dev/build/introduction/) - App store deployment

---

## 🌟 Features & Capabilities

<table>
<tr>
<td>🔥 <b>Hot Reload</b><br/>Instant code changes</td>
<td>📱 <b>Universal Apps</b><br/>iOS, Android, Web</td>
<td>🎨 <b>Native UI</b><br/>Platform-specific components</td>
</tr>
<tr>
<td>📸 <b>Native APIs</b><br/>Camera, GPS, sensors</td>
<td>🔔 <b>Push Notifications</b><br/>Expo Notifications service</td>
<td>☁️ <b>OTA Updates</b><br/>Update apps without app store</td>
</tr>
<tr>
<td>🔐 <b>Authentication</b><br/>Social & custom auth</td>
<td>💾 <b>Local Storage</b><br/>SQLite, AsyncStorage</td>
<td>🌐 <b>Web Support</b><br/>Same code, web deployment</td>
</tr>
</table>

---

## 🤝 Community & Support

<div align="center">

Join our community of developers creating universal apps!

[![GitHub](https://img.shields.io/badge/💻_GitHub-181717?style=for-the-badge&logo=github)](https://github.com/expo/expo)
[![Discord](https://img.shields.io/badge/💬_Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://chat.expo.dev)
[![Forum](https://img.shields.io/badge/🗣️_Forum-000020?style=for-the-badge)](https://forums.expo.dev)
[![Twitter](https://img.shields.io/badge/🐦_Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/expo)

</div>

### 🆘 Getting Help

- 📖 **Documentation**: Comprehensive guides and API references
- 💬 **Discord**: Real-time community support
- 🐛 **GitHub Issues**: Report bugs and request features
- 📱 **Stack Overflow**: Tag your questions with `expo`

---

## 🚀 Deployment

### 📱 App Stores

<div style="background: #1e1e1e; border-radius: 12px; padding: 16px; margin: 16px 0; position: relative; font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;">
  <div style="display: flex; align-items: center; margin-bottom: 12px;">
    <div style="width: 12px; height: 12px; border-radius: 50%; background: #ff5f57; margin-right: 8px;"></div>
    <div style="width: 12px; height: 12px; border-radius: 50%; background: #ffbd2e; margin-right: 8px;"></div>
    <div style="width: 12px; height: 12px; border-radius: 50%; background: #28ca42;"></div>
  </div>
  <code style="color: #6272a4; font-size: 14px;"># Build for iOS App Store</code><br/>
  <code style="color: #50fa7b; font-size: 14px;">npx eas build --platform ios</code><br/><br/>
  <code style="color: #6272a4; font-size: 14px;"># Build for Google Play Store</code><br/>
  <code style="color: #50fa7b; font-size: 14px;">npx eas build --platform android</code><br/><br/>
  <code style="color: #6272a4; font-size: 14px;"># Build for both platforms</code><br/>
  <code style="color: #50fa7b; font-size: 14px;">npx eas build --platform all</code>
</div>

### 🌐 Web Deployment

<div style="background: #1e1e1e; border-radius: 12px; padding: 16px; margin: 16px 0; position: relative; font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;">
  <div style="display: flex; align-items: center; margin-bottom: 12px;">
    <div style="width: 12px; height: 12px; border-radius: 50%; background: #ff5f57; margin-right: 8px;"></div>
    <div style="width: 12px; height: 12px; border-radius: 50%; background: #ffbd2e; margin-right: 8px;"></div>
    <div style="width: 12px; height: 12px; border-radius: 50%; background: #28ca42;"></div>
  </div>
  <code style="color: #6272a4; font-size: 14px;"># Export for web</code><br/>
  <code style="color: #50fa7b; font-size: 14px;">npx expo export --platform web</code><br/><br/>
  <code style="color: #6272a4; font-size: 14px;"># Deploy to Netlify, Vercel, or any static host</code>
</div>

---

## 🔧 Troubleshooting

<details>
<summary><b>📱 Common Issues</b></summary>

### Metro bundler issues

```bash
npx expo start --clear
```

### iOS simulator not working

```bash
npx expo run:ios --simulator
```

### Android emulator not detected

```bash
npx expo run:android --device
```

### Dependencies conflicts

```bash
rm -rf node_modules package-lock.json
npm install
```

</details>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Happy coding! 🎉**

_Built with ❤️ using [Expo](https://expo.dev) and [React Native](https://reactnative.dev)_

![Made with Expo](https://img.shields.io/badge/Made%20with-Expo-000020?style=flat&logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript)

</div>
