// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Account Profile
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useAppContext } from '../contexts/AppContext';

interface AccountProfileProps {}

export function AccountProfile(props: AccountProfileProps) {
  const { state, dispatch } = useAppContext();
  const profile = state.profile;
  const settings = state.settings;

  const handleClose = () => {
    dispatch({ type: 'GO_BACK' });
  };

  const handleToggle = (key: 'highContrast' | 'reduceMotion' | 'largeText') => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      settings: { [key]: !settings[key] },
    });
  };

  const handleTerminateSession = () => {
    if (typeof window !== 'undefined' && window.confirm('Terminate your session? You will need to re-authenticate.')) {
      dispatch({ type: 'RESET_APP' });
    }
  };

  const avatarUrl = profile.avatarUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwz6JQxazjaqig8SXx4Liw-AgPtfV_6qdmdaablKK0BiE9RqwhOlEn_T3mXyq3MuOP9oYtdzzZl5SDHkwSvrcBq7JFPvs5d9TrXOh12WqtnBDt-3U7r_X3O0IeqxkYlm-0sQpxN9vaPiN6YdhZhTfVctNkkO0P2ZBvN-Mjaljze-i5dSSG2ssvUPBBVW06PTLdDZziyi_Zxx-jir3UksMDRE_8-hAPahLhg-7SlBOdKFs5MF1-FB7tGRcmb3QMiDsk3MqSEf8Tx_c';

  return (
    <>
      {/* Modal Overlay Backdrop */}
      <div className="fixed inset-0 z-40 bg-background/90 flex justify-end">
        {/* Profile Panel (Slide-out) */}
        <aside className="w-full md:w-[480px] h-full bg-surface border-l border-outline-variant flex flex-col animate-slide-in">
          {/* Header */}
          <header className="flex items-center justify-between px-container-padding py-gutter border-b border-outline-variant">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Operator Profile</h2>
            <button
              aria-label="Close panel"
              className="w-touch-target h-touch-target flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-variant hover:text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface transition-colors"
              onClick={handleClose}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </header>
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-container-padding flex flex-col gap-container-padding">
            {/* Identification Card (Bento Style) */}
            <section className="bg-surface-container border border-outline-variant p-container-padding flex flex-col sm:flex-row gap-gutter items-center sm:items-start text-center sm:text-left">
              <div className="shrink-0 w-24 h-24 rounded-full border-2 border-outline-variant overflow-hidden bg-surface-variant relative flex items-center justify-center">
                <img
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                  data-alt="A professional headshot of a female military or emergency management commander in a dark, tactical uniform. The lighting is dramatic and cinematic, reminiscent of a high-tech command center. The background is a blurred dark slate grey, conveying a serious, utilitarian, and authoritative mood suitable for a mission-critical dashboard profile."
                  src={avatarUrl}
                />
              </div>
              <div className="flex flex-col gap-unit flex-1">
                <h1 className="font-headline-md text-headline-md text-on-surface">{profile.name || 'Cmdr. Jane Doe'}</h1>
                <div className="flex flex-col gap-base mt-2">
                  <div className="flex items-center gap-unit text-on-surface-variant font-body-md text-body-md">
                    <span className="material-symbols-outlined text-[18px]">badge</span>
                    <span>{profile.role || 'Regional Supervisor'}</span>
                  </div>
                  <div className="flex items-center gap-unit text-primary font-mono-data text-mono-data">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    <span>Command Sector: {profile.sector || 'HQ Alpha'}</span>
                  </div>
                </div>
              </div>
            </section>
            {/* Accessibility & Environment Toggles */}
            <section className="flex flex-col gap-gutter">
              <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Environment Configuration</h2>
              <div className="border border-outline-variant bg-surface-container flex flex-col divide-y divide-outline-variant">
                {/* Toggle Item 1 */}
                <div className="flex items-center justify-between p-gutter min-h-[56px]">
                  <div className="flex flex-col">
                    <span className="font-body-lg text-body-lg text-on-surface">High Contrast Mode</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">Enhance visual boundaries</span>
                  </div>
                  {/* Simulated Toggle (Off State) */}
                  <button
                    aria-label="High Contrast Mode toggle"
                    aria-pressed={settings.highContrast}
                    className={`relative w-12 h-6 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container cursor-pointer transition-colors ${settings.highContrast ? 'bg-primary-container' : 'bg-surface-variant border border-outline-variant'}`}
                    onClick={() => handleToggle('highContrast')}
                  >
                    <span className={`absolute top-[2px] w-5 h-5 rounded-full transition-transform ${settings.highContrast ? 'right-[2px] bg-on-primary-container' : 'left-[2px] bg-on-surface-variant'}`}></span>
                  </button>
                </div>
                {/* Toggle Item 2 */}
                <div className="flex items-center justify-between p-gutter min-h-[56px]">
                  <div className="flex flex-col">
                    <span className="font-body-lg text-body-lg text-on-surface">Reduce Motion</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">Disable interface animations</span>
                  </div>
                  {/* Simulated Toggle (On State) */}
                  <button
                    aria-label="Reduce Motion toggle"
                    aria-pressed={settings.reduceMotion}
                    className={`relative w-12 h-6 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container cursor-pointer transition-colors ${settings.reduceMotion ? 'bg-primary-container' : 'bg-surface-variant border border-outline-variant'}`}
                    onClick={() => handleToggle('reduceMotion')}
                  >
                    <span className={`absolute top-[2px] w-5 h-5 rounded-full transition-transform ${settings.reduceMotion ? 'right-[2px] bg-on-primary-container' : 'left-[2px] bg-on-surface-variant'}`}></span>
                  </button>
                </div>
                {/* Toggle Item 3 */}
                <div className="flex items-center justify-between p-gutter min-h-[56px]">
                  <div className="flex flex-col">
                    <span className="font-body-lg text-body-lg text-on-surface">Large Text Data</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">Scale typography in data grids</span>
                  </div>
                  {/* Simulated Toggle (Off State) */}
                  <button
                    aria-label="Large Text Data toggle"
                    aria-pressed={settings.largeText}
                    className={`relative w-12 h-6 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container cursor-pointer transition-colors ${settings.largeText ? 'bg-primary-container' : 'bg-surface-variant border border-outline-variant'}`}
                    onClick={() => handleToggle('largeText')}
                  >
                    <span className={`absolute top-[2px] w-5 h-5 rounded-full transition-transform ${settings.largeText ? 'right-[2px] bg-on-primary-container' : 'left-[2px] bg-on-surface-variant'}`}></span>
                  </button>
                </div>
              </div>
            </section>
            {/* Security Actions */}
            <section className="flex flex-col gap-gutter mt-auto pt-container-padding">
              <button
                className="w-full flex items-center justify-center gap-unit h-touch-target border border-outline-variant bg-transparent text-on-surface font-label-md text-label-md uppercase tracking-wider hover:bg-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface transition-colors cursor-pointer"
                onClick={handleTerminateSession}
              >
                <span className="material-symbols-outlined text-[18px]">logout</span>
                Terminate Session
              </button>
            </section>
          </div>
        </aside>
      </div>
    </>
  );
}
