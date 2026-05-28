// Booking Form Wizard Logic
document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.wizard-step');
  const prevBtn = document.getElementById('prev-step-btn');
  const nextBtn = document.getElementById('next-step-btn');
  const submitBtn = document.getElementById('submit-booking-btn');
  const progressPercent = document.getElementById('wizard-progress-percent');
  const progressLine = document.getElementById('wizard-progress-bar');
  const stepIndicators = document.querySelectorAll('.step-indicator-item');

  let currentStepIndex = 0;
  const formData = {};

  // Form Fields mapping
  const fields = {
    fullName: document.getElementById('book-name'),
    email: document.getElementById('book-email'),
    phone: document.getElementById('book-phone'),
    currentLevel: document.getElementById('book-current-level'),
    programType: document.getElementById('book-program-type'),
    targetTerm: document.getElementById('book-term'),
    koreanLevel: document.getElementById('book-korean'),
    notes: document.getElementById('book-notes')
  };

  function updateWizard() {
    // Show/hide steps
    steps.forEach((step, idx) => {
      if (idx === currentStepIndex) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    // Update Indicators
    stepIndicators.forEach((ind, idx) => {
      if (idx <= currentStepIndex) {
        ind.classList.add('active');
      } else {
        ind.classList.remove('active');
      }
    });

    // Navigation buttons display
    if (currentStepIndex === 0) {
      if (prevBtn) prevBtn.style.display = 'none';
    } else {
      if (prevBtn) prevBtn.style.display = 'inline-flex';
    }

    if (currentStepIndex === steps.length - 1) {
      if (nextBtn) nextBtn.style.display = 'none';
      if (submitBtn) submitBtn.style.display = 'inline-flex';
      populateSummary();
    } else {
      if (nextBtn) nextBtn.style.display = 'inline-flex';
      if (submitBtn) submitBtn.style.display = 'none';
    }

    // Progress Bar
    const progress = ((currentStepIndex) / (steps.length - 1)) * 100;
    if (progressLine) progressLine.style.width = `${progress}%`;
    if (progressPercent) progressPercent.textContent = `${Math.round(progress)}%`;
  }

  function validateStep(stepIndex) {
    let isValid = true;

    // Reset error styling
    const activeStep = steps[stepIndex];
    activeStep.querySelectorAll('.form-error').forEach(el => el.classList.remove('show'));
    activeStep.querySelectorAll('input, select').forEach(el => el.classList.remove('input-error'));

    if (stepIndex === 0) {
      // Step 1: Personal Info
      if (!fields.fullName || fields.fullName.value.trim() === '') {
        showFieldError(fields.fullName, 'name-error');
        isValid = false;
      }
      if (!fields.email || !validateEmail(fields.email.value)) {
        showFieldError(fields.email, 'email-error');
        isValid = false;
      }
      if (!fields.phone || fields.phone.value.trim() === '') {
        showFieldError(fields.phone, 'phone-error');
        isValid = false;
      }
    } else if (stepIndex === 1) {
      // Step 2: Preferences
      if (!fields.programType || fields.programType.value === '') {
        showFieldError(fields.programType, 'program-error');
        isValid = false;
      }
    }

    return isValid;
  }

  function showFieldError(fieldEl, errorId) {
    if (fieldEl) fieldEl.classList.add('input-error');
    const errorEl = document.getElementById(errorId);
    if (errorEl) errorEl.classList.add('show');
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function populateSummary() {
    // Sync summary page values
    const summaryName = document.getElementById('summary-name');
    const summaryEmail = document.getElementById('summary-email');
    const summaryPhone = document.getElementById('summary-phone');
    const summaryProgram = document.getElementById('summary-program');
    const summaryTerm = document.getElementById('summary-term');
    const summaryKorean = document.getElementById('summary-korean');

    if (summaryName) summaryName.textContent = fields.fullName.value;
    if (summaryEmail) summaryEmail.textContent = fields.email.value;
    if (summaryPhone) summaryPhone.textContent = fields.phone.value;

    if (summaryProgram) {
      const selectedOption = fields.programType.options[fields.programType.selectedIndex];
      summaryProgram.textContent = selectedOption ? selectedOption.text : fields.programType.value;
    }
    if (summaryTerm) {
      const selectedOption = fields.targetTerm.options[fields.targetTerm.selectedIndex];
      summaryTerm.textContent = selectedOption ? selectedOption.text : fields.targetTerm.value;
    }
    if (summaryKorean) {
      const selectedOption = fields.koreanLevel.options[fields.koreanLevel.selectedIndex];
      summaryKorean.textContent = selectedOption ? selectedOption.text : fields.koreanLevel.value;
    }
  }

  // Navigation handlers
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (validateStep(currentStepIndex)) {
        if (currentStepIndex < steps.length - 1) {
          currentStepIndex++;
          updateWizard();
        }
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStepIndex > 0) {
        currentStepIndex--;
        updateWizard();
      }
    });
  }

  // Form submission & Canvas Confetti trigger
  const bookingForm = document.getElementById('consultation-booking-form');
  const wizardContainer = document.getElementById('booking-wizard-container');
  const successContainer = document.getElementById('booking-success-container');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (validateStep(currentStepIndex)) {
        // Collect form data
        Object.keys(fields).forEach(key => {
          if (fields[key]) {
            formData[key] = fields[key].value;
          }
        });

        console.log('Successfully booked:', formData);

        // Hide wizard, show success
        if (wizardContainer) wizardContainer.style.display = 'none';
        if (successContainer) {
          successContainer.style.display = 'flex';
          successContainer.classList.add('fade-in');
        }

        // Trigger Canvas Confetti
        triggerConfetti();
      }
    });
  }

  // Restart wizard
  const resetBtn = document.getElementById('restart-booking-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      // Clear fields
      if (bookingForm) bookingForm.reset();
      currentStepIndex = 0;
      if (successContainer) successContainer.style.display = 'none';
      if (wizardContainer) wizardContainer.style.display = 'block';
      updateWizard();
    });
  }

  // Canvas Confetti Implementation
  function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight || 450;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const colors = ['#3b82f6', '#4f46e5', '#ec4899', '#10b981', '#f59e0b'];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height + 20,
        radius: Math.random() * 5 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: Math.random() * 12 - 6,
        vy: Math.random() * -12 - 8,
        gravity: 0.25,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 6 - 3,
        opacity: 1
      });
    }

    function animate() {
      let activeParticles = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        if (p.opacity <= 0) return;
        activeParticles++;

        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.008;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        // Draw small rectangles or circles
        ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 1.5);
        ctx.restore();
      });

      if (activeParticles > 0) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  }

  // Initialize Wizard UI state
  updateWizard();
});
