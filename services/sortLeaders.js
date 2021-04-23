function sort_leaders(hackers) {
    
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

    return hackers.slice(0, 2);
}

exports.sort_leaders = sort_leaders;