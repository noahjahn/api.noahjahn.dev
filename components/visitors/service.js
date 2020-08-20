module.exports = {
    getLocationByPublicIpv4: async (ipAddress) => {
        try {
            return await getLocationByPublicIpv4(ipAddress);
        } catch (err) {
            console.err(err);
            return exit(1);
        }
    }
}