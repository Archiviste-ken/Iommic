<div align="center">
  <img src="public/iommic-banner.png" alt="IOMMIC Banner" width="100%" />

  <br />
  <br />

  <h2><b>L E A R N &nbsp; W I T H &nbsp; P U R P O S E. &nbsp; P L A Y &nbsp; W I T H &nbsp; S O U L. &nbsp; C R E A T E &nbsp; Y O U R &nbsp; O W N &nbsp; L E G A C Y.</b></h2>
  
  <p>
    <i>A dark, atmospheric guitar-learning ecosystem inspired by the undisputed master of the heavy riff.</i>
  </p>

  <br />

  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](#)
  [![React](https://img.shields.io/badge/React-1C1C1E?style=for-the-badge&logo=react&logoColor=58C4DC)](#)
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38B2AC)](#)
  [![MongoDB](https://img.shields.io/badge/MongoDB-161616?style=for-the-badge&logo=mongodb&logoColor=47A248)](#)
</div>

<hr style="border: 1px solid #1a1a1a;" />

## THE LEGACY

Tony Iommi did not just play the guitar; he forged a new sound in the fires of adversity. When two of his fingertips were severed, he tuned down, turned up the gain, and birthed heavy metal. IOMMIC is built on that same relentless ethos. It is not about perfect theory, sterile exercises, or endless scales—it is about tone, weight, and progression. It is a tribute to the architects of doom and a crucible for the next generation of riff-makers. 

<hr style="border: 1px solid #1a1a1a;" />

## WHY I BUILT THIS

The digital landscape is cluttered with bright, gamified guitar tutorials that lack soul. I wanted an environment that felt like stepping into a dimly lit rehearsal space. A platform that doesn’t hand you everything at once, but demands mastery before revealing its next secret. I built IOMMIC because the journey of learning the guitar should feel as legendary, atmospheric, and heavy as the music itself.

<hr style="border: 1px solid #1a1a1a;" />

## THE ARSENAL

| Feature | Description |
| :--- | :--- |
| **Smart Song Unlock System** | Progressively unlock darker, heavier anthems as your technical proficiency grows. |
| **Chord Mastery Tracking** | Granular analytics on chord resonance, sustain, and accuracy. |
| **Personalized Learning Paths** | A curriculum forged in iron, adapting to your unique playing style and weaknesses. |
| **Chord Transition Trainer** | Iron out the dissonance. Master the spaces between the notes in complete darkness. |
| **Practice Heatmaps** | Visualize your relentless dedication through crimson heatmaps of your daily sessions. |
| **Streak System** | Build unbroken chains of daily practice. Momentum is your heaviest weapon. |
| **Guitar Progress Analytics** | Deep insights mapping your journey from novice to tone-smith. |
| **Dynamic Recommendations** | Riffs and exercises curated to push you to the absolute edge of your current ability. |

<hr style="border: 1px solid #1a1a1a;" />

## ARCHITECTURE & TECH STACK

IOMMIC is built on a foundation of modern, battle-tested technologies, fused together to create a seamless, low-latency experience worthy of the stage.

* **Frontend:** Next.js & React for a reactive, server-rendered interface.
* **Styling:** Tailwind CSS, painted in deep blacks, charcoals, and crimson accents.
* **State Management:** Zustand, providing predictable, lightweight dark-state management.
* **Authentication:** Clerk Authentication, securing your progression silently.
* **Database:** MongoDB & Mongoose, an immutable vault for your statistics and unlocked lore.
* **Audio Processing:** Web Audio API & Pitchy, performing real-time, low-latency pitch detection to analyze every vibration of your strings.

<hr style="border: 1px solid #1a1a1a;" />

## PROJECT STRUCTURE

```text
iommic/
├── app/                  # Next.js App Router (The UI Vault)
│   ├── globals.css       # The dark aesthetic (Tailwind directives)
│   ├── layout.tsx        # Master layout & Font definitions
│   └── page.tsx          # The Entry Point
├── components/           # Reusable UI fragments (The Riffs)
├── lib/                  # Database connections & abstractions
├── store/                # Zustand state management
├── utils/                # Audio analysis algorithms & Pitchy integration
└── public/               # Static assets (Banners, Iconography)
```

<hr style="border: 1px solid #1a1a1a;" />

## INITIATION

Prepare your local environment.

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/iommic.git
   cd iommic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Forge your environment**
   Copy the example environment securely.
   ```bash
   cp .env.example .env.local
   ```

4. **Summon the server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to enter the void.

<hr style="border: 1px solid #1a1a1a;" />

## ENVIRONMENT VARIABLES

To run IOMMIC locally, you will need to configure the following secrets in your `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
MONGODB_URI=
```

<hr style="border: 1px solid #1a1a1a;" />

## DEPLOYMENT

The recommended deployment path is through the Vercel infrastructure.

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Inject the environmental secrets into the Vercel dashboard.
4. Deploy to production.

<hr style="border: 1px solid #1a1a1a;" />

## ROADMAP

- **Phase I:** Core audio detection, chord tracking, and UI dark-mode manifestation.
- **Phase II:** Implementation of the Smart Unlock System and personalized doom paths.
- **Phase III:** Multiplayer riff-sharing, leaderboards, and collaborative transition training.
- **Phase IV:** Advanced tone analysis (distortion and fuzz detection).

<hr style="border: 1px solid #1a1a1a;" />

## CONTRIBUTING

We welcome those who wish to add their weight to the project. 

1. Fork the void.
2. Create your feature branch (`git checkout -b feature/heavy-riff`).
3. Commit your changes (`git commit -m 'Forge new heavy riff'`).
4. Push to the branch (`git push origin feature/heavy-riff`).
5. Open a Pull Request.

Ensure your code is clean, your logic is robust, and your aesthetic matches the darkness of the platform.

<hr style="border: 1px solid #1a1a1a;" />

## FUTURE VISION

IOMMIC will evolve from a learning platform into a digital sanctuary for heavy music creation. The vision entails integrating tone generation, allowing users to not just learn riffs, but to sculpt their digital amp settings directly in the browser, matching the colossal, crushing sound of their heroes.

<hr style="border: 1px solid #1a1a1a;" />

## LICENSE

Distributed under the MIT License. See `LICENSE` for more information. Let the riffs be free.
