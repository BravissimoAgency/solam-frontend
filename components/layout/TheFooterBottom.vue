<template>
    <div class="bottom flex">
        <div class="column">
            SOLAM is a part of the
            <a
                href="http://lyckeby.com/en"
                target="_blank"
            >
                Lyckeby Group
            </a>
        </div>
        <div class="column">
            <a
                href="https://wp.solam.com/wp-content/uploads/2020/05/privacy-policy.pdf"
                target="_blank"
            >
                Privacy Policy
            </a>
        </div>
        <div class="column">
            Website produced by
            <a
                href="https://www.bravissimo.se/"
                target="_blank"
            >
                Bravissimo
            </a>
        </div>

    </div>
</template>

<style lang="postcss" scoped>
.bottom {
    padding: 23px 100px;
    background-color: #e4eaec;
    color: #8a969c;
    font-size: 13px;
    @media (--smallDesktop) {
        padding: 20px 50px;
    }
    @media (--laptop) {
        padding: 15px 30px;
    }
    @media (--tablet) {
        justify-content: center;
    }
    @media (--mobile) {
        font-size: 12px;
        flex-wrap: wrap;
        line-height: 1.6;
        text-align: center;
    }
    & a:hover {
        color: var(--primaryColor);
    }
}
.column {
    border-right: 1px solid #8A969D;
    margin-right: 10px;
    padding-right: 10px;
    @media (--smallTablet) {
        margin-right: 5px;
        padding-right: 5px;
    }
    @media (--mobile) {
        border-right: 0;
        margin-right: 0;
        padding-right: 0;
        margin-bottom: 2px;
    }
    @media (--smallMobile) {
        width: 100%;
        border-right: 0;
        margin-right: 0;
        padding-right: 0;
        margin-bottom: 5px;
    }
    &:first-child::after {
        @media (--mobile) {
            content: '/';
            color: var(--primaryColor);
            padding-right: 0.33em;
        }
        @media (--smallMobile) {
            content: none;
        }
    }
    &:last-child {
        border-right: 0;
        margin-right: 0;
        padding-right: 0;
        @media (--mobile) {
            width: 100%;
            margin-bottom: 0;
        }
    }

}
</style>
