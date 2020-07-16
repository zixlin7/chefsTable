const selectReservationsByUser = (state, userId) => {
    if (!state.entities.users[userId].reservation_ids) return [];
    return state.entities.users[userId].reservation_ids.map(rId => {
        return state.entities.reservations[rId];
    });
}

export default selectReservationsByUser;

