export const resetFormFields = (setReservationData) => {
  setReservationData({
    selectedSeating: "",
    selectedDate: "",
    selectedTime: "",
    selectedOccasion: "",
    selectedDiners: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    specialRequests: "",
    policyAgreement: false,
    loading: false,
    showConfirmationMsg: false,
  });
};
