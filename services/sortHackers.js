function sort_hackers(hackers) {
    
    hackers.sort((a, b) => {
        const name_a = a.name.toUpperCase();
        const name_b = b.name.toUpperCase();

        if(name_a < name_b) {
            return -1;
        }
        if(name_a > name_b) {
            return 1;
        }

        return 0;
    });

    console.log('hackers: ', hackers);

    return hackers;
}

exports.sort_hackers = sort_hackers;