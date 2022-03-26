<template>
    <self-table :data="ingReviewData"
        :loading="loading"
        :pagination.sync="pagination"
        @page-change="handleInit()"
    >
        <bk-table-column type="index" label="序号" :width="60"></bk-table-column>
        <bk-table-column label="奖项名称">
            <template slot-scope="ingAwards">
                <span :title="ingAwards.row['award_name']" v-text="ingAwards.row['award_name']"></span>
            </template>
        </bk-table-column>
        <bk-table-column label="奖项咨询人">
            <template slot-scope="ingAwards">
                <span :title="ingAwards.row['award_consultant_displayname_for_display']">{{ ingAwards.row['award_consultant_displayname_for_display'] }}</span>
            </template>
        </bk-table-column>
        <bk-table-column label="总评审轮次" :width="300">
            <template slot-scope="endedApprovals">
                <bk-select
                    :value="0"
                    :clearable="false"
                >
                    <bk-option v-for="(item,index) in endedApprovals.row['award_reviewers']"
                        :key="item"
                        :name="'第' + (index + 1) + '轮:' + item.join(',')"
                        :id="index"
                        :title="'第' + (index + 1) + '轮:' + item.join(',')"
                    ></bk-option>
                </bk-select>
            </template>
        </bk-table-column>
        <bk-table-column label="操作">
            <template slot-scope="ingReviewAwards">
                <bk-button class="mr10"
                    :text="true"
                    @click="handleGetAwardApplications(ingReviewAwards.row)"
                >
                    查看申请详情
                </bk-button>
                <bk-button theme="danger"
                    class="mr20 ml20 "
                    :text="true"
                    @click="toOverAwards(ingReviewAwards.row)"
                >
                    结束奖项
                </bk-button>
            </template>
        </bk-table-column>
    </self-table>
</template>

<script>
    import { getAwards, postFinishAward } from '@/api/service/award-service'
    import { tableMixins } from '@/views/mycheck/table/tableMixins'
    import { AWARD_APPLICATION_DETAILS_ROUTE_PATH, ING_REVIEW } from '@/constants'

    export default {
        name: 'ended-approval',
        mixins: [tableMixins],
        data () {
            return {
                ingReviewRemoteData: []
            }
        },
        computed: {
            ingReviewData (self) {
                return self.ingReviewRemoteData?.map(award => {
                    return {
                        award_id: award['id'],
                        award_name: award['award_name'],
                        award_description: award['award_description'],
                        award_department_fullname: award['award_department_fullname'],
                        award_department_id: award['award_department_id'],
                        award_reviewers: award['award_reviewers'],
                        award_consultant: award['award_consultant'],
                        award_consultant_displayname: award['award_consultant_displayname'],
                        award_consultant_displayname_for_display: award['award_consultant'] + '（' + award['award_consultant_displayname'] + '）',
                        award_demand: award['award_demand'],
                        start_time: award['start_time'],
                        end_time: award['end_time'],
                        approval_state: award['approval_state']
                    }
                })
            }
        },
        mounted () {
            this.handleInit()
        },
        methods: {
            handleInit () {
                Promise.all([this.handleGetIngReview()])
            },
          
            handleGetIngReview (page = this.pagination.current, size = this.pagination.size) {
                if (this.loading) return
                this.loading = true
                const params = {
                    page,
                    size,
                    award_status: ING_REVIEW,
                    group_id: this.$bus.curGlobalGroupId
                }
                return getAwards(params).then(response => {
                    const pendingStartAwards = response.data
                    this.pagination.count = pendingStartAwards.count
                    this.ingReviewRemoteData = pendingStartAwards.data
                }).finally(_ => {
                    this.loading = false
                })
            },
            handleToGetDetail (awardInfo) {
                console.log(awardInfo)
                this.$router.push({
                    name: AWARD_APPLICATION_DETAILS_ROUTE_PATH,
                    query: {
                        award_id: awardInfo['award_id'],
                        group_id: this.$bus.curGlobalGroupId
                    }
                })
            },
            handleToOverAward (awardInfo) {
                return postFinishAward(awardInfo['award_id']).then(response => {
                    this.handleInit()
                    this.messageSuccess('已成功终止奖项评审')
                })
            },
            handleGetAwardApplications () {},
            toOverAwards () {}
        }

    }
</script>
