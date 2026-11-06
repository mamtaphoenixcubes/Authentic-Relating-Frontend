// src/app/_components/buttons/index.js

// =====================================================
// BUTTON COMPONENTS
// =====================================================

// Core unified button component (use this for full control)
export { default as UnifiedButton } from "./UnifiedButton";

// Variant-specific wrappers
export { default as EventButton } from "./EventButton";
export { default as PrimaryWaveButton } from "./PrimaryWaveButton";
export { default as OffreingButton } from "./OffreingButton";
export { default as GlassButton } from "./GlassButton";

// =====================================================
// HOOKS
// =====================================================

// Hook that returns all variant styles (useful for custom buttons)
export { useButtonVariants } from "./useButtonVariants";

// =====================================================
// DEFAULT EXPORT (Optional - for convenience)
// =====================================================

import UnifiedButton from "./UnifiedButton";
export default UnifiedButton;